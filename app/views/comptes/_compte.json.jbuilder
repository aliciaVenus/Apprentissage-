json.extract! compte, :id, :nom, :prenom, :email, :pwd, :pwdconfirme, :created_at, :updated_at
json.url compte_url(compte, format: :json)
