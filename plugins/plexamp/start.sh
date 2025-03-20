if [[ -n "$SOUND_DISABLE_PLEXAMP" ]]; then
  echo "Plexamp is disabled, exiting..."
  exit 0
fi

echo "Starting Plexamp plugin..."
ExecStart=node /home/pi/plexamp/js/index.js