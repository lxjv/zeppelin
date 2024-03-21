#!/usr/bin/env bash

source .zepsettings # settings moved to seperate file

$POST_DIR="src/content/blog/posts"

echo "zep v2.0.0"

OPTION=$(gum choose "new" "edit" "stats" "quit") || echo "gum broke or not installed"

if [[ $OPTION == "new" ]]; then
	echo "Creating a new post"

	POST_SLUG=$(gum input --placeholder "post slug") || echo "gum broke or not installed"

	cp ./src/cdn/template/post.md "$POST_DIR"/drafts/"$POST_SLUG".md
	$EDITOR "$POST_DIR"/drafts/"$POST_SLUG".md

elif [[ $OPTION == "edit" ]]; then
	EDIT_THIS=$(gum file $POST_DIR) || echo "gum broke or not installed"
	$EDITOR $EDIT_THIS

elif [[ $OPTION == "stats" ]]; then
	echo "zeppelin stats"
	POST_COUNT=$(find "$POST_DIR"/**.md | wc -l | tr -d ' ')
	echo "There are $POST_COUNT posts!"

else
	exit
fi
