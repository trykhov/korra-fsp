# == Schema Information
#
# Table name: comments
#
#  id          :bigint           not null, primary key
#  text        :text
#  question_id :integer
#  user_id     :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Comment < ApplicationRecord
end
