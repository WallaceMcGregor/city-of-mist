import { CityActor } from "../city-actor";

export class TokenTools {

	static getActiveScene() {
		// return window.game.scenes.active;
		return window.game.scenes.current;
	}

	static getActiveSceneTokens() {
		return this.getSceneTokens(this.getActiveScene())
			.filter(x=>x.actor);
	}

	static getSceneTokens( scene : Scene) {
		if (!scene)
			return [];
		return scene.tokens.filter( (x:TokenDocument<CityActor>) =>!!x.actor);
	}

	static getActiveSceneTokenActors() {
		return this.getSceneTokenActors(this.getActiveScene());
	}

	static getVisibleActiveSceneTokenActors() {
		return this.getSceneTokens(this.getActiveScene())
			.filter (x=> !x.hidden)
			.map(x=> x.actor);
	}

	static getSceneTokenActors(scene: Scene) {
		const tokens = this.getSceneTokens(scene);
		return tokens.map ( x=> x.actor);
	}

	static getActiveUnlinkedSceneTokens() {
		return this.getActiveSceneTokens().filter( x=> x.actorLink == false);
	}

}