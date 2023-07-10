def distSq(x1, y1, x2, y2):
    return (x1 - x2)**2 + (y1 - y2)**2


def dist(x1, y1, x2, y2):
    return ((x1 - x2)**2 + (y1 - y2)**2) ** 0.5


def gcd(a, b):
    if a < b:
        a, b = b, a
    while b != 0:
        tmp = a
        a = b
        b = tmp % b
    return a


def getSlope(x1, y1, x2, y2):
    x = x2 - x1
    y = y2 - y1
    absX = x
    if x < 0:
        absX = -absX
    absY = y
    if y < 0:
        absY = -absY

    g = gcd(absX, absY)
    return (x / g, y / g)


def isPointInLine(startX, startY, endX, endY, betweenX, betweenY, calculatedDistSq):
    a = distSq(startX, startY, betweenX, betweenY)
    b = distSq(betweenX, betweenY, endX, endY)
    return (((a ** 0.5) + (b ** 0.5)) - (calculatedDistSq ** 0.5)) < 0.00000000000000000009


def getPointsForNewOrigin(newOriginX, newOriginY, width, height, posX, posY):
    gridWiseVerticalDist = newOriginY / height
    gridWiseHorizontalDist = newOriginX / width

    resX = newOriginX + posX
    resY = newOriginY + posY

    if gridWiseHorizontalDist % 2 == 1:
        resX = newOriginX + (width - posX)

    if gridWiseVerticalDist % 2 == 1:
        resY = newOriginY + (height - posY)

    return resX, resY


def func(dimensions, myPos, targetPos, laserDist):
    topLeftX = -dimensions[0]
    topLeftY = dimensions[1]
    bottomRightX = dimensions[0]
    bottomRightY = -dimensions[1]

    origins = [(0, 0)]

    distToCheck = laserDist + ((dimensions[0]**2) + (dimensions[1]**2))**0.5

    while dist(0, 0, topLeftX, topLeftY) < distToCheck:
        for i in range(topLeftX, bottomRightX, dimensions[0]):
            origins.append((i, topLeftY))

        for i in range(topLeftY, bottomRightY, -dimensions[1]):
            origins.append((bottomRightX, i))

        for i in range(bottomRightX, topLeftX, -dimensions[0]):
            origins.append((i, bottomRightY))

        for i in range(bottomRightY, topLeftY, dimensions[1]):
            origins.append((topLeftX, i))

        topLeftX = topLeftX - dimensions[0]
        topLeftY = topLeftY + dimensions[1]
        bottomRightX = bottomRightX + dimensions[0]
        bottomRightY = bottomRightY - dimensions[1]

    laserDistSq = laserDist ** 2
    slopeSet = set()

    ans = 0

    upto = len(origins)
    for i in range(0, upto):
        newOriginX = origins[i][0]
        newOriginY = origins[i][1]

        newMyPos = getPointsForNewOrigin(
            newOriginX, newOriginY, dimensions[0], dimensions[1], myPos[0], myPos[1])
        newTargetPos = getPointsForNewOrigin(
            newOriginX, newOriginY, dimensions[0], dimensions[1], targetPos[0], targetPos[1])
        calculatedDistSq = distSq(
            myPos[0], myPos[1], newTargetPos[0], newTargetPos[1])
        if i != 0 and isPointInLine(myPos[0], myPos[1], newTargetPos[0], newTargetPos[1], newMyPos[0], newMyPos[1], calculatedDistSq) == True:
            continue

        slopeToCheck = getSlope(
            myPos[0], myPos[1], newTargetPos[0], newTargetPos[1])
        if slopeToCheck in slopeSet or calculatedDistSq > laserDistSq:
            continue

        ans = ans + 1
        slopeSet.add(slopeToCheck)

    return ans

print(func([2,3],[1,1],[1,2],10000))
# print(func([4, 3], [1, 1], [3, 2], 100))
# print(func([300,275], [150,150], [185,100], 500));
