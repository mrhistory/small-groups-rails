class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  after_filter :set_csrf_cookie

protected
  def set_csrf_cookie
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  def verified_request?
    super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
  end

  def login_required
    if !signed_in?
      render status: 401, json: { error: 'Must be logged in to proceed.' }
      return false
    end
    return true
  end

end
