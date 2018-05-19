class Dirtree < ApplicationRecord
  has_many :nodes, as: :nodeable
end
