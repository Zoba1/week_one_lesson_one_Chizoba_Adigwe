const isTrue = true
const isFalse = false
const result = isTrue && isFalse

// for the &&

// for the ||
isTrue = true
isFalse = false
isTrue || isFalse
isFalse || isTrue
console.log(result)

// for the !
!(isTrue || isFalse)
!isFalse && isTrue
!isTrue || isFalse
console.log(result)

// for the if
if (isTrue) {
  console.log(isTrue)
} else {
  console.log(isFalse)
}
if (isFalse) {
  console.log(isFalse)
} else {
  console.log(isTrue)
}
