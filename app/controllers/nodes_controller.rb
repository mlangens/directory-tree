class NodesController < ApplicationController
  before_action :find_nodeable

    def new
      @node = Node.new
    end

    def create
      @node = @nodeable.node.new node_params
    end

    private

    def node_params
      params.require(:node).permit(:name)
    end

    def find_nodeable
      @nodeable = Node.find_by_id(params[:node_id]) if params[:node_id]
      @nodeable = Dirtree.find_by_id(params[:dirtree_id]) if params[:dirtree_id]
    end

end
