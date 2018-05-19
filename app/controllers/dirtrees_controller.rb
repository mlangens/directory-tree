class DirtreesController < ApplicationController
  def index
    @dirtrees = Dirtree.all
    render json: {dirtrees: Dirtree.all.includes(:nodes)}
  end

  def show
    render json: {dirtree: Dirtree.includes(:nodes).find(params[:id])}
  end
end
