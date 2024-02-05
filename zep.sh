#!/usr/bin/env bash

# this is a script to automate some of the boring stuff
# feel free to use this for other projects. -LA

# config
EDITOR="code" # dd this line to use $EDITOR in your sys envs
POST_DIR="$HOME/dev/web/zeppelin/src/content/blog/posts/drafts" # use a static path if you install the cli

echo "zep v1.3.0 - naming update"

OPTION=$(gum choose "new" "edit" "stats" "quit") || echo "gum broke"

if [[ $OPTION == "new" ]]; then
    echo "Creating a new post"

    POST_SLUG=$(gum input --placeholder "post slug") || echo "gum broke"

    cp ./src/cdn/template/post.md "$POST_DIR"/"$POST_SLUG".md
	$EDITOR "$POST_DIR"/"$POST_SLUG".md

elif [[ $OPTION == "edit" ]]; then
	#!todo #3
	echo "this is broken right now sorry"
	exit

elif [[ $OPTION == "stats" ]]; then
    echo "concorde stats"
    POST_COUNT=$(find "$POST_DIR"/**.md | wc -l | tr -d ' ')
	echo "There are $POST_COUNT posts!"
else
    exit
fi
