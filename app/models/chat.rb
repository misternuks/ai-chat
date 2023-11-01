class Chat < ApplicationRecord
  belongs_to :topic

  has_many :messages, dependent: :destroy

end
