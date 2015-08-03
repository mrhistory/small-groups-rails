class Api::ProfileController < ApplicationController
  before_action :login_required

  # GET /profile.json
  def index
    render :json => current_api_user
  end
end