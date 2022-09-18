class AddCourseTypeToCourses < ActiveRecord::Migration[7.0]
  def change
    add_reference :courses, :course_type, null: false, foreign_key: true
  end
end
