class Unit < ApplicationRecord
  validates :unit_name, presence: true
  belongs_to :course
  has_many :topics
end
