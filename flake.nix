{
  description = ''
    Posture

    This flake is not meant to be deployed right now. It only
    serves as development environment for the project.
  '';

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

  inputs.devshell.url = "github:numtide/devshell";
  inputs.devshell.inputs.nixpkgs.follows = "nixpkgs";

  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = { self, nixpkgs, flake-utils, devshell }:
    flake-utils.lib.eachDefaultSystem (system: {
      devShell =
        let
          pkgs = import nixpkgs {
            inherit system;

            overlays = [ devshell.overlays.default ];
            config.allowUnfree = true;
          };
        in
          pkgs.devshell.mkShell {
            devshell.name = "posture";
            devshell.motd = ''
            {bold}{219}
               ________  ________  ________  ________  ________  ________  ________
              ╱        ╲╱        ╲╱        ╲╱        ╲╱    ╱   ╲╱        ╲╱        ╲  *
             ╱    x    ╱    /    ╱      ___╱__    ___╱    ╱    ╱         ╱       __╱    *
            ╱╱      __╱    /    ╱---      ╱  ╱   ╱  ╱         ╱        _╱       __╱  *
            ╲╲_____╱  ╲________╱╲________╱   ╲__╱   ╲________╱╲____╱___╱╲________╱    *

            Get up and stretch once in a while !{reset}
            $(type -p menu &>/dev/null && menu)
            '';
            devshell.packages = with pkgs; [
              nodejs_20 # https://github.com/oven-sh/bun/issues/158
            ];
          };
      });
}
