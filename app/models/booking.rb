class Booking < ActiveRecord::Base
  validates :start_date, :end_date, :puppy_id, :renter_id, presence: true

  validate :start_date_validation
  validate :end_date_validation

  belongs_to :puppy,
    primary_key: :id,
    foreign_key: :puppy_id,
    class_name: 'Puppy'

  belongs_to :renter,
    primary_key: :id,
    foreign_key: :renter_id,
    class_name: 'User'

  def start_date_validation
    if self.start_date < Date.today
      errors.add(:start_date, 'Start has to be after current date')
    end
  end

  def end_date_validation
    if self.end_date < self.start_date
      errors.add(:end_date, 'End Date has to be after start date')
    end
  end



end
