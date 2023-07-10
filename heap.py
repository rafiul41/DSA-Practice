def distSq(x1, y1, x2, y2):
    return (x1 - x2)**2 + (y1 - y2)**2


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


fx = [0, 1, 1, 1, 0, -1, -1, -1]
fy = [1, 1, 0, -1, -1, -1, 0, 1]
dir = ['u', 'ur', 'r', 'dr', 'd', 'dl', 'l', 'ul']


def getPointsForNewOrigin(newOriginX, newOriginY, firstX, firstY, width, height, dir):
    if dir == 'u' or dir == 'd':
        return newOriginX + firstX, newOriginY + (height - firstY)
    elif dir == 'l' or dir == 'r':
        return newOriginX + (width - firstX), newOriginY + firstY
    else:
        return newOriginX + (width - firstX), newOriginY + (height - firstY)


def func(dimensions, myPos, targetPos, laserDist):
    laserDistSq = laserDist ** 2
    queue = []
    slopeSet = set()
    vis = set()

    ans = 0

    if distSq(myPos[0], myPos[1], targetPos[0], targetPos[1]) <= laserDistSq:
        ans = ans + 1
        queue.append((0, 0, myPos, targetPos))
        slopeSet.add(getSlope(myPos[0], myPos[1], targetPos[0], targetPos[1]))
        vis.add((0, 0))

    validOrigins = [];

    while len(queue) != 0:
        u = queue.pop(0)
        for i in range(0, 8):
            newOriginX = u[0] + dimensions[0] * fx[i]
            newOriginY = u[1] + dimensions[1] * fy[i]
            if (newOriginX, newOriginY) in vis:
                continue

            newMyPos = getPointsForNewOrigin(
                newOriginX, newOriginY, u[2][0] - u[0], u[2][1] - u[1], dimensions[0], dimensions[1], dir[i])
            newTargetPos = getPointsForNewOrigin(
                newOriginX, newOriginY, u[3][0] - u[0], u[3][1] - u[1], dimensions[0], dimensions[1], dir[i])
            calculatedDistSq = distSq(
                myPos[0], myPos[1], newTargetPos[0], newTargetPos[1])
            if isPointInLine(myPos[0], myPos[1], newTargetPos[0], newTargetPos[1], newMyPos[0], newMyPos[1], calculatedDistSq) == True:
                continue

            slopeToCheck = getSlope(
                myPos[0], myPos[1], newTargetPos[0], newTargetPos[1])
            if slopeToCheck in slopeSet or calculatedDistSq > laserDistSq:
                continue

            ans = ans + 1
            queue.append((newOriginX, newOriginY, newMyPos, newTargetPos))
            slopeSet.add(slopeToCheck)
            vis.add((newOriginX, newOriginY))
            validOrigins.append((newOriginX, newOriginY))

    print(validOrigins)

    return ans


print(func([2,3],[1,1],[1,2],1000))
# print(func([3, 2], [1, 1], [2, 1], 1000))
# print(func([300,275], [150,150], [185,100], 500));