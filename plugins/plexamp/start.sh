if [[ -n "$SOUND_DISABLE_PLEXAMP" ]]; then
  echo "Plexamp is disabled, exiting..."
  exit 0
fi

echo "Starting Plexamp plugin..."
exec node /usr/pi/plexamp/js/index.js