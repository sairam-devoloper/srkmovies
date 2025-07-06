{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs
    pkgs.git
    pkgs.vlc
    pkgs.ffmpeg
  ];

  shellHook = ''
    echo "Welcome to SRKMOVIES development environment!"
  '';
}
