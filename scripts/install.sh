#!/bin/bash
clear
echo "--------------------------------"
echo '| Installing dependencies. . . |'
echo "--------------------------------"
echo
sleep 1

cd backend; npm i;cd ..; cd frontend; npm i

echo
echo "----------------------------------"
echo '| Installed all dependencies! :) |'
echo "----------------------------------"
echo
