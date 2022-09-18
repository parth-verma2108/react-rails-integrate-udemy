class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name, null: false, default: ""
      t.string :last_name, null: false, default: ""
      t.integer :age
      t.string :biography
      t.string :email, null: false, default: ""
      t.string :password, null: false, default: ""
      t.string :password_confirmation, null: false, default: ""
      t.string :password_digest
      t.string :image

      t.timestamps
    end
  end
end
