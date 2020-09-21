json.set! @user.id do 
    json.extract! @user, :email, :session_token
end     
           