class CreateCourses < ActiveRecord::Migration[7.0]
  def change
    create_table :courses do |t|
      t.string :name, default: "", null: false
      t.string :description
      t.integer :price, default: 0, null: false
      t.integer :duration, default: 0, null: false
      t.date :issue_date

      t.timestamps
    end
  end
end
