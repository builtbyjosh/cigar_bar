# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# style_arr = ['Corona', 'Londres', 'Robusto', 'Torpedo', 'Pantela', 'Slim Pantela', 'Half Corona', 'Churchill', 'Toro', 'Cetros']

# style_arr.each do |s|
#     Style.create(name: s)
# end


Cigar.create(name: 'Asylum 13' , description: 'Aliquip nulla nisi sit laborum minim culpa non.' , price: 10, style: Style.all.sample(1)[0])
Cigar.create(name: 'AJ Fernandez San Lotano Requiem' , description: 'Aliquip nulla nisi sit laborum minim culpa non.' , price: 6, style: Style.all.sample(1)[0])
Cigar.create(name: 'Black Label Trading Co. - Royalty' , description: 'Aliquip nulla nisi sit laborum minim culpa non.' , price: 35, style: Style.all.sample(1)[0])
Cigar.create(name: 'Cohiba Blue' , description: 'Aliquip nulla nisi sit laborum minim culpa non.' , price: 200, style: Style.all.sample(1)[0])
Cigar.create(name: 'Davidoff Winston Churchill' , description: 'Aliquip nulla nisi sit laborum minim culpa non.' , price: 15, style: Style.all.sample(1)[0])
Cigar.create(name: 'Erin Go Bragh' , description: 'Aliquip nulla nisi sit laborum minim culpa non.' , price: 8, style: Style.all.sample(1)[0])
Cigar.create(name: 'General Grant' , description: 'Aliquip nulla nisi sit laborum minim culpa non.' , price: 8, style: Style.all.sample(1)[0])
Cigar.create(name: 'H. Upmann Connecticut' , description: 'Aliquip nulla nisi sit laborum minim culpa non.' , price: 8, style: Style.all.sample(1)[0])
Cigar.create(name: 'Havana Classico' , description: 'Aliquip nulla nisi sit laborum minim culpa non.' , price: 6, style: Style.all.sample(1)[0])
Cigar.create(name: 'Joya del Jefe' , description: 'Aliquip nulla nisi sit laborum minim culpa non.' , price: 10, style: Style.all.sample(1)[0])
Cigar.create(name: 'Kristoff Criollo' , description: 'Aliquip nulla nisi sit laborum minim culpa non.' , price: 10, style: Style.all.sample(1)[0])
Cigar.create(name: 'La Aroma de Cuba Mi Amor' , description: 'Aliquip nulla nisi sit laborum minim culpa non.' , price: 25, style: Style.all.sample(1)[0])
Cigar.create(name: 'Montecristo' , description: 'Aliquip nulla nisi sit laborum minim culpa non.' , price: 25, style: Style.all.sample(1)[0])
Cigar.create(name: "Man O' War" , description: 'Aliquip nulla nisi sit laborum minim culpa non.' , price: 15, style: Style.all.sample(1)[0])
Cigar.create(name: 'Oliva Serie V' , description: 'Aliquip nulla nisi sit laborum minim culpa non.' , price: 15, style: Style.all.sample(1)[0])
Cigar.create(name: 'Punch Chop Suey' , description: 'Aliquip nulla nisi sit laborum minim culpa non.' , price: 6, style: Style.all.sample(1)[0])
Cigar.create(name: 'Padron Damaso' , description: 'Aliquip nulla nisi sit laborum minim culpa non.' , price: 6, style: Style.all.sample(1)[0])
Cigar.create(name: 'Romeo y Julieta Viejo' , description: 'Aliquip nulla nisi sit laborum minim culpa non.' , price: 8, style: Style.all.sample(1)[0])
Cigar.create(name: 'Sobremesa' , description: 'Aliquip nulla nisi sit laborum minim culpa non.' , price: 15, style: Style.all.sample(1)[0])
Cigar.create(name: 'Uncle Buck' , description: 'Aliquip nulla nisi sit laborum minim culpa non.' , price: 35, style: Style.all.sample(1)[0])