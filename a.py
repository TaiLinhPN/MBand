# get = input("nhap môn")
# if get == "java":
#     print("thầy Hòa")
# elif get == "python":
#     print("cô Khuê")
# elif get == "javascrit":
#     print("Thầy Đình")
# else:
#     print("tự học")

i=0
while( i <= 5):
    print("i l Js")
    i = i+ 1

for row in range(6):
    for col in range(7):
        if (row == 0 and col % 3 != 0) or (row == 1 and col % 3 == 0) or (row - col == 2) or (row + col == 8):
            print("*", end="")
        else:
            print(" ",end="")
    print()


listDay = [2 , 11, 2021]

print("hôm nay là ngày " / listDay[0])