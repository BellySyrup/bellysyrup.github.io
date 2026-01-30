#!/usr/bin/env bash

set -e

echo "=== Minimal GNOME install for Debian ==="

# Ensure we're running as root
if [ "$EUID" -ne 0 ]; then
  echo "Please run as root (sudo ./minimal-gnome.sh)"
  exit 1
fi

echo "Updating system..."
apt update
apt -y upgrade

echo "Installing core system components..."
apt install -y \
  dbus-x11 \
  systemd \
  systemd-sysv

echo "Installing networking (wired Ethernet)..."
apt install -y \
  network-manager \
  network-manager-gnome

systemctl enable NetworkManager
systemctl start NetworkManager

echo "Installing minimal GNOME shell..."
apt install -y \
  gnome-session \
  gnome-shell \
  gdm3 \
  gnome-control-center \
  gsettings-desktop-schemas \
  xdg-desktop-portal \
  xdg-desktop-portal-gnome

echo "Installing requested GNOME apps (GTK4 where applicable)..."
apt install -y \
  firefox-esr \
  gnome-text-editor \
  gnome-terminal \
  nautilus \
  gnome-tweaks

echo "Installing Flatpak..."
apt install -y flatpak
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

echo "Enabling graphical login..."
systemctl set-default graphical.target

echo "Cleaning up..."
apt autoremove -y
apt autoclean

echo "======================================="
echo "Minimal GNOME installation complete."
echo "You can reboot now:"
echo "  reboot"
echo "======================================="
