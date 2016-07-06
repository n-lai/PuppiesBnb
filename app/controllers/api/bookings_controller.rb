class Api::BookingsController < ApplicationController

  def create
    if Puppy.find(params['booking']['puppy_id'].to_i).owner_id == current_user.id
      render text: "You cannot book your own puppy", status: 422
    else
      @booking = Booking.new(booking_params)

      @booking.start_date = DateTime.parse(booking_params[:start_date])
      @booking.end_date = DateTime.parse(booking_params[:end_date])

      @booking.renter_id = current_user.id

      if @booking.save
        render json: @booking
      else
        render json: @booking.errors.full_messages, status: 422
      end
    end
  end

  def renter_index
    @bookings = Booking.where(renter_id: params[:renter_id]).order(:start_date)
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
    render json: @booking
  end

  private
  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :puppy_id)
  end
end
