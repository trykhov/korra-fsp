# == Schema Information
#
# Table name: answers
#
#  id          :bigint           not null, primary key
#  text        :text             not null
#  user_id     :integer          not null
#  question_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Answer < ApplicationRecord
    validates :text, :question_id, :user_id, presence: true
    validates :user_id, uniqueness: { scope: :question_id, message: "user can only answer once" }
    
    belongs_to :user
    belongs_to :question 

    has_many :comments, dependent: :destroy

    has_many :people_who_commented,
        through: :comments,
        source: :user
end
