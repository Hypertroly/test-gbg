package ps2.restapp;

import org.springframework.data.repository.CrudRepository;

public interface GamesRepository extends CrudRepository<Game, String> {

}