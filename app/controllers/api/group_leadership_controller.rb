class Api::GroupLeadershipController < ApplicationController
  before_action :login_required
  before_action :set_group_leadership, only: [:update, :destroy]

  # POST /group_leadership.json
  def create
    @group_leadership = GroupLeadership.new(group_leadership_params)

    respond_to do |format|
      if @group_leadership.save
        format.json { render :show, status: :created, location: @group_leadership }
      else
        format.json { render json: @group_leadership.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /group_leadership/1.json
  def update
    respond_to do |format|
      if @group_leadership.update(group_params)
        format.json { render :show, status: :ok, location: @group_leadership }
      else
        format.json { render json: @group_leadership.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /group_leadership/1.json
  def destroy
    @group_leadership.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_group_leadership
      @group_leadership = GroupLeadership.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def group_leadership_params
      params.require(:group_leadership).permit(:group, :user)
    end
end
