class CigarsController < ApplicationController
    
    def index
        cigars = Cigar.all
        render json: cigars
    end


end