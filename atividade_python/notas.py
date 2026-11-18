nome = input("Qual é o seu nome? ")
nota1 = float(input("Digite a primeira nota: "))
nota2 = float(input("Digite a segunda nota: ")) 

media = (nota1 + nota2) / 2 
print(f"Olá, {nome}! Sua média é {media:.1f}.") 

if media >= 6: 
    print("Situação: aprovado(a)") 
else: 
    print("Situação: em recuperação") 
