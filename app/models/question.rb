# == Schema Information
#
# Table name: questions
#
#  id         :bigint           not null, primary key
#  title      :string
#  user_id    :integer
#  topic_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ApplicationRecord
    validates :title, presence: true

    belongs_to :user
    # belongs_to :topic 

    has_many :answers, dependent: :destroy

    has_many :people_who_answered,
        through: :answers,
        source: :user

    has_many :comments,
        through: :answers,
        source: :comments
end
