class Topic < ApplicationRecord
  validates :topic_name, presence: true
  belongs_to :unit
end
