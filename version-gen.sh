#
# usage ./version-gen.sh [BASE]
#

BASE=$1
if [ "$BASE" = "" ]; then
    BASE=$(date +"%y%m")
fi

echo "Using BASE=$BASE"
echo ""

echo "Existing versions:"
git tag | grep $BASE | cut -d'_' -f 1

MAX=$(git tag | grep $BASE | cut -d'_' -f 1 | cut -d'.' -f 2 | sort | tail -n 1)
NEXT=$(( MAX + 1 ))

echo ""
echo "Version counter"
echo "MAX  = $MAX"
echo "NEXT = $NEXT"

HASH=$(git rev-parse --short HEAD)

echo ""
echo "This tag:"
echo "$BASE.$NEXT.$HASH"
