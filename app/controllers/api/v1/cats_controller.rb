class Api::V1::CatsController < ActionController::Base
  skip_before_action :verify_authenticity_token
  
  def index
    cats = Cat.all
    render json: cats
  end

  def show
    cat = Cat.find(params[:id])
    render json: cat
  end

  def update
    cat = Cat.find(params[:id])
    cat.update(score: cat.score + 1)
    render json: cat
  end

  def create
    cat = Cat.new(cat_params)
    
    if cat.save
      render json: cat
    else
      render json: { errors: cat.errors }
    end
  end

  def destroy
    cat = Cat.find(params[:id])
    cat.destroy

    render json: cat
  end

  private

  def cat_params
    params.require(:cat).permit(:id_from_atelier, :url, :score, :created_at, :updated_at)
  end
end
