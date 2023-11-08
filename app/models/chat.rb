class Chat < ApplicationRecord
  belongs_to :topic
  belongs_to :user
  has_many :messages, dependent: :destroy

  validates :user, :topic, presence: true
  validates :user, :topic, uniqueness: true
end
