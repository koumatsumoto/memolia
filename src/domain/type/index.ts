export type ID<T extends string> = {
  type: T;
  value: string;
}

export type Line<T extends string = ''> = {
  id: ID<'line'>;
  raw: string;
  type: T;
  text: string;
  indent: number;
};

export type Situation = {
  id: ID<'situation'>;
  line: Line<'situation'>;
  when: string | null;
  where: string | null;
  why: string | null;
  who: string | null;
  what: string | null;
}

export type Memorandum = {
  id: ID<'episode'>;
  line: Line<'episode'>;
  text: string;
}

export type Episode = {
  id: ID<'episode'>;
  situation: Situation;
  memorandums: Memorandum[];
}

// 表現
// * Lineの重なった部分
//   * 重なった部分はNameで一意に定まる
//   * インプット／アウトプットの方向があり、それぞれが up/down に対応する
export type Node = {
  id: ID<'Node'>;
  name: string;
  up: Node[];
  down: Node[];
};

// 表現：一つ一つの投稿
export type Memory = {
  episode: Episode;
  nodes: Node[];
}

// Memoryから構築可能
export type NodeToLines = Map<Node, Line[]>
export type LineToNode = Map<Line, Node[]>
export type EpisodeToNode = Map<Node, Episode[]>
export type NodeToEpisodes = Map<Episode, Node[]>
