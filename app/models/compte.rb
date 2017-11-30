class Compte < ApplicationRecord
	validates :nom, presence: {message: "Le nom est obligatoire"}
	validates :email, uniqueness: true, presence: {message: "Entrer votre adresse mail"}
	validates :pwd, presence: {message: "Entrer votre mot de passe"}
	validates :pwdconfirme, presence: {message: "Veillez confirmer votre mot de passe"}

end
