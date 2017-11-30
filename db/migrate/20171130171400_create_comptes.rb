class CreateComptes < ActiveRecord::Migration[5.0]
  def change
    create_table :comptes do |t|
      t.string :nom
      t.string :prenom
      t.string :email
      t.string :pwd
      t.string :pwdconfirme

      t.timestamps
    end
  end
end
