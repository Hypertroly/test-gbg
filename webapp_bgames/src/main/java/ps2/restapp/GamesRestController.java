package ps2.restapp;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GamesRestController {

	@Autowired
	private GamesRepository gamesRepo;

	@CrossOrigin
	@GetMapping("/api/games")
	public ArrayList<GameBasic> readAll() {
		Iterable<Game> games = gamesRepo.findAll();
		ArrayList<GameBasic> allGame = new ArrayList<GameBasic>();

		for (Game game : games) {
			GameBasic gameBasic = new GameBasic();

			gameBasic.setNome(game.getNome());
			gameBasic.setURL(game.getURL());
			gameBasic.setURLVideo(game.getURLVideo());
			gameBasic.setDescricao(game.getDescricao());
			gameBasic.setCategoria(game.getCategoria());
			allGame.add(gameBasic);
		}

		return allGame;
	}

	@CrossOrigin
	@GetMapping("/api/games/filtro")
	@ResponseBody
	public ArrayList<Game> getGamesbyCategoria(@RequestParam String Categoria) {
		Iterable<Game> games = gamesRepo.findAll();
		ArrayList<Game> filtroGame = new ArrayList<Game>();

		for (Game game : games) {
			if (game.getCategoria().contains(Categoria)) {
				filtroGame.add(game);
			}
		}

		return filtroGame;
	}

	@CrossOrigin
	@GetMapping("/api/games/{nome}")
	public Game getGame(@PathVariable String nome) {
		Optional<Game> retorno = gamesRepo.findById(nome);
		Game c = null;
		if (retorno.isPresent()) {
			c = retorno.get();
		}
		return c;
	}

	@CrossOrigin
	@PostMapping("/api/games")
	public Game createGame(@RequestBody Game c) {
		gamesRepo.save(c);
		return c;
	}

	@CrossOrigin
	@PutMapping("/api/games/{nome}")
	public Game updateGame(@RequestBody Game c, @PathVariable String nome) {
		Game game = null;
		game = this.getGame(nome);
		if (game != null) {
			gamesRepo.save(c);
			game = c;
		}
		return game;
	}

	@CrossOrigin
	@DeleteMapping(value = "/api/games/{nome}", produces = "application/json") // deletar item
	public String deleteGame(@PathVariable String nome) {
		Game game = this.getGame(nome);
		boolean result = false;
		if (game != null) {
			gamesRepo.delete(game);
			result = true;
		}
		return "{ \"success\" : " + (result ? "true" : "false") + "}";
	}

}
