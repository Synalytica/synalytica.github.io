# Synalytica Homepage (synalytica-home)

Homepage for all of Synalytica LLC's team, ventures and offerings

## Installation

```sh
docker build -t synalytica/homepage .
```

### Running

```bash
docker run --rm -d -e DEBUG=1 -v $PWD:/app -p 9000:9000 synalytica/homepage:latest
```
