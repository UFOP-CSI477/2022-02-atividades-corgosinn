class Doacao < ApplicationRecord
  belongs_to :pessoa
  belongs_to :local_coletum
  
  has_many :produtos
end
