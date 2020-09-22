# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  location        :string           not null
#  phone_num       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    validates :email, :session_token, uniqueness: true
    validates :email, :password_digest, :first_name, :last_name, :location, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}

    before_validation :ensure_session_token

    attr_reader :password

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end

    def is_password?(password)
        b = BCrypt::Password.new(password_digest)
        b.is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end


end
