class CigarsController < ApplicationController
    
    def index
        cigars = Cigar.all
        render json: cigars
    end

    def show
        cigar = Cigar.find(params[:id])
        render json: cigar
    end

end