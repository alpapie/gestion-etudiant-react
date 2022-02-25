a=[[1,2,3],[4,5,6],[7,8,9]]
# tab=[]
# for i in a:
#     for j in i:
#       tab.append(j )
# tab.sort()
# print(tab)

tab=[]
for i in range(len(a)):
    if i<1:
        for j in a[i]:
            tab.append(j)
    if i>0 and  i <len(a):
        tab.append(a[i][-1])
print(tab)
#Snail Sort
#Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
#array = [[1,2,3],  