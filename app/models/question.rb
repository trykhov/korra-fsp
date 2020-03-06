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

    has_many :comments, dependent: :destroy
    has_many :answers, dependent: :destroy
end
