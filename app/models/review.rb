class Review < ActiveRecord::Base
  validates :rating, inclusion: { in: (1..5) }
  validates :user_id, :puppy_id, :description, presence: true

  validate :user_validation

  belongs_to :puppy,
    primary_key: :id,
    foreign_key: :puppy_id,
    class_name: 'Puppy'

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'


  def user_validation
    if self.user_id === Puppy.find(self.puppy_id).owner_id
      errors.add(:user_id, 'Owner may not review their own puppy')
    end
  end
end
