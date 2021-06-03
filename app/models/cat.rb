class Cat < ApplicationRecord
    validates :id_from_atelier, :url, :score, presence: true, on: :update 
    validates :score, numericality: { only_integer: true }, presence: true, on: :update 
end
