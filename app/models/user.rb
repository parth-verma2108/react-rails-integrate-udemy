class User < ApplicationRecord
  has_secure_password
  has_many :courses
  validates_presence_of :first_name
  validates_presence_of :last_name
  validates_presence_of :email
  validates_presence_of :password
end
