# == Schema Information
#
# Table name: answers
#
#  id          :bigint           not null, primary key
#  answer      :text             not null
#  user_id     :integer          not null
#  question_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Answer < ApplicationRecord
end
